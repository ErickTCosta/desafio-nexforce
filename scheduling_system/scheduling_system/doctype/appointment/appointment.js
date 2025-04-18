// Copyright (c) 2025, Erick Costa and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Appointment", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on("Appointment", {
	validate: async function (frm) {
		const now = moment();
		const start = moment(frm.doc.start_date);

		console.log(frm.doc.start_date, "estou aqui");
		const hour = start.hour();
		if (hour < 8 || hour >= 20) {
			frappe.throw("Só é possível agendar entre 08:00 e 20:00.");
		}

		if (start.isBefore(now)) {
			frappe.throw("Você não pode agendar para um horário que já passou.");
		}

		// Aguarda a resposta do backend antes de seguir
		const r = await frappe.call({
			method: "scheduling_system.scheduling_system.doctype.appointment.appointment.check_conflict",
			args: {
				seller: frm.doc.seller,
				start_date: frm.doc.start_date,
				duration: frm.doc.duration,
			},
		});
		// verifica o metodo do r
		console.log(r, "resposta do backend");

		// Verifica se há conflitos retornados pelo backend
		if (r.message && r.message.length > 0) {
			frappe.throw("Esse horário entra em conflito com outro agendamento.");
		}
	},
});

frappe.ui.form.on("Appointment", {
	start_date: function (frm) {
		calcular_end_date(frm);
	},
	duration: function (frm) {
		calcular_end_date(frm);
	},
});

// calcular data de termino e atruir o valor ao campo da mesma
function calcular_end_date(frm) {
	if (frm.doc.start_date && frm.doc.duration) {
		const start = moment(frm.doc.start_date);
		const end = start.clone().add(frm.doc.duration, "hours");
		frm.set_value("end_date", end.format("YYYY-MM-DD HH:mm:ss"));
	}
}

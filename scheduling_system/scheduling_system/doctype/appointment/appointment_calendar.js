frappe.views.calendar["Appointment"] = {
	field_map: {
		start: "start_date",
		end: "end_date",
		id: "name",
		title: "client_name",
		status: "status",
	},
	style_map: function (status) {
		if (status === "Scheduled") {
			return "green";
		} else if (status === "Finished") {
			return "blue";
		} else if (status === "Cancelled") {
			return "red";
		}
	},
	order_by: "start_date",
};

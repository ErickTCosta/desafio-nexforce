frappe.views.calendar["Appointment"] = {
	field_map: {
		start: "start_date",
		end: "end_date",
		id: "name",
		title: "client_name",
		status: "status",
	},
	style_map: {
		Scheduled: "green",
		Finished: "blue",
		Cancelled: "red",
	},
	order_by: "start_date",
};

import frappe
from frappe.utils import get_datetime
from datetime import timedelta

@frappe.whitelist()
def check_conflict(start_date, duration, name=None):
    start_date = get_datetime(start_date)
    end_date = start_date + timedelta(hours=float(duration))

    filters = {
        "docstatus": ["<", 2],  # Evita pegar agendamentos cancelados
        "start_date": ["<", end_date],
        "end_date": [">", start_date],
    }

    # Evita comparar com ele mesmo, se for edição
    if name:
        filters["name"] = ["!=", name]

    appointments = frappe.get_all(
        "Appointment",
        filters=filters,
        fields=["name"]
    )

    return True if appointments else False

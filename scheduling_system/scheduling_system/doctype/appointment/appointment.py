# Copyright (c) 2025, Erick Costa and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator
import frappe
from frappe.utils import get_datetime
from datetime import timedelta


class Appointment(WebsiteGenerator):
	pass
	
	
@frappe.whitelist()
def check_conflict(start_date, duration, name=None, seller=None):
    start_date = get_datetime(start_date)
    end_date = start_date + timedelta(hours=time_str_to_hours(duration))

    filters = {
        "seller": seller,  
        "docstatus": ["<", 2],
        "start_date": ["<", end_date],
        "end_date": [">", start_date],
    }

    conflicting = frappe.get_all(
        "Appointment",
        filters=filters,
        fields=[ "seller","start_date", "end_date"]
    )

    print("conflicting", conflicting)  # Para depuração
    return conflicting  # Retorna a lista de conflitos diretamente

def time_str_to_hours(time_str):
    h, m, s = map(int, time_str.split(":"))
    return h + m / 60 + s / 3600

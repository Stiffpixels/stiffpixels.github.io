---
title: 'Auto Email Sender'
date: 2024-10-11T09:55:53+05:30
draft: false
tags:
- next
- node
- express
- postgresql
---

Auto Email Sender is an automation software that I worked on for RPJ Overseas,
It sends a set count of emails with template and customer data (csv file)
replacing their name and the product they enquired about. I mostly worked on the
frontend for this web application that is the admin dashboard with 3 main sections
Data Editor, Template Editor, Settings

### Data Editor

Data editor to create, read, delete, update single customers, or to 
export all customers in a given category in csv file. There is also an
import feature that allows customers to be imported into the app through
the upload of any csv file with valid column names and data. Customers are
listed according to their category mainly All, Enquiry, Reorder.

### Template Editor

Template Editor is where you would manage all the templates for different products
You can delete, update or create templates that would be used to send emails to
the respective customers. Templates can be for enquiry *or* reorder but not both,
There where also special event templates and default templates.

### Settings

Here you would manage all the settings like the admin users who can access the dashboard with only one
super admin and adjusting the schedule for sending emails. The schedule can be edited for both enquiry, 
reorder and one can change the timing in IST (which will be converted to GMT automatically on save), the
products for which the emails will be sent and others will be skipped. The limit or count of the emails to
send.  

### RBAC

Role Based Access Control was implemented as per the business requirements like only the super admin can
change the passwords for the normal admins as it was a small company there was no need for highly secured
authentication system which would only make it harder to operate and the main admin will lose control. The
import and export features where also only available to the super admin so that normal admin users cannot 
just rip the data out conviniently.

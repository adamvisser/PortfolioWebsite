from django.views.generic import TemplateView

class LandingView(TemplateView):
	template_name = "pages/index.html"

class ResumeView(TemplateView):
	template_name = "pages/resume.html"

class ContactView(TemplateView):
	template_name = "pages/contact.html"


class HobbiesView(TemplateView):
	template_name = "pages/hobbies.html"

from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.LandingView.as_view(), name='index'),
    url(r'^resume/$', views.ResumeView.as_view(), name='resume'),
    url(r'^hobbies/$', views.HobbiesView.as_view(), name='hobbies'),
    url(r'^contact/$', views.ContactView.as_view(), name='contact'),
]

from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^resume/$', views.contact, name='contact'),
    url(r'^hobbies/$', views.contact, name='contact'),
]

from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView
from django.conf.urls.i18n import i18n_patterns

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns(
    '',
    # url(r'^blog/', include('blog.urls')),
    url(r'^i18n/', include('django.conf.urls.i18n')),
    # url(r'^accounts/', include('django.contrib.auth.urls')),
    url(r'^grappelli/', include('grappelli.urls')),  # grappelli URLS
    # url(r'^front-edit/', include('front.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^rosetta/', include('rosetta.urls')),
)

urlpatterns += i18n_patterns(
    '',
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='home'),
)

from django.contrib import admin

from .models import Mecanico, Veiculo

admin.site.register((Veiculo, Mecanico))
# Register your models here.

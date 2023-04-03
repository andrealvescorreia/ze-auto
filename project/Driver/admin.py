from django.contrib import admin

from .models import Mecanico, Veiculo, Avaliacao, Manutencao

admin.site.register((Veiculo, Mecanico, Avaliacao, Manutencao))
# Register your models here.

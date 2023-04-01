from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class Veiculo(models.Model):
    modelo = models.CharField(max_length=250)
    marca = models.CharField(max_length=250)
    ano = models.DateField()
    cor = models.CharField(max_length=50)
    proprietario = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True, default=None)

    def __str__(self):
        return self.modelo

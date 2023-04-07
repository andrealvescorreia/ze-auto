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


class Mecanico(models.Model):
    nome_proprietario = models.CharField(max_length=250)
    nome_fantasia = models.CharField(max_length=250)
    email = models.EmailField(max_length=250)
    password = models.CharField(max_length=50)
    cnpj = models.CharField(max_length=250)
    endeco = models.CharField(max_length=250)

    def __str__(self):
        return self.nome_proprietario

class Avaliacao(models.Model):
    note = models.PositiveIntegerField()
    comentario = models.TextField(blank=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True, default=None
    )
    mecanico = models.ForeignKey(Mecanico, on_delete=models.CASCADE)

    def __str__(self):
        return self.mecanico.nome_proprietario

class Manutencao(models.Model):
    descricao = models.TextField()
    veiculo = models.ForeignKey(Veiculo, on_delete=models.DO_NOTHING)
    mecanico = models.ForeignKey(Mecanico, on_delete=models.CASCADE)

    def __str__(self):
        return self.veiculo.modelo
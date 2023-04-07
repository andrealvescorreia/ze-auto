from rest_framework import viewsets
from Driver.api import serializers
from Driver import models


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializers
    queryset = models.User.objects.all()


class VeiculoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.VeiculoSerializers
    queryset = models.Veiculo.objects.all()

class MecanicoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MecanicoSerializers
    queryset = models.Mecanico.objects.all()

class AvaliacaoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AvaliacaoSerializers
    queryset = models.Avaliacao.objects.all()

class ManutencaoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ManutencaoSerializers
    queryset = models.Manutencao.objects.all()
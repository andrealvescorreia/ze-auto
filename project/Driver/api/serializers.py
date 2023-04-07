from rest_framework import serializers
from Driver import models


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = '__all__'

class VeiculoSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Veiculo
        fields = '__all__'

class MecanicoSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Mecanico
        fields = '__all__'

class AvaliacaoSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Avaliacao
        fields = '__all__'

class ManutencaoSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Avaliacao
        fields = '__all__'
# Generated by Django 4.1.7 on 2023-04-04 18:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Driver', '0002_mecanico'),
    ]

    operations = [
        migrations.CreateModel(
            name='Manutencao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descricao', models.TextField()),
                ('mecanico', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Driver.mecanico')),
                ('veiculo', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='Driver.veiculo')),
            ],
        ),
        migrations.CreateModel(
            name='Avaliacao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note', models.PositiveIntegerField()),
                ('comentario', models.TextField(blank=True)),
                ('mecanico', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Driver.mecanico')),
                ('user', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

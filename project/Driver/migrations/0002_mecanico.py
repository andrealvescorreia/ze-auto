# Generated by Django 4.1.7 on 2023-04-01 23:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Driver', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mecanico',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_proprietario', models.CharField(max_length=250)),
                ('nome_fantasia', models.CharField(max_length=250)),
                ('email', models.EmailField(max_length=250)),
                ('password', models.CharField(max_length=50)),
                ('cnpj', models.CharField(max_length=250)),
                ('endeco', models.CharField(max_length=250)),
            ],
        ),
    ]

# Generated by Django 3.0.3 on 2020-02-13 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Todoapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='urgency',
            field=models.CharField(choices=[('IM', 'immediate'), ('NR', 'normal'), ('ME', 'medium')], default='NR', max_length=2),
        ),
    ]

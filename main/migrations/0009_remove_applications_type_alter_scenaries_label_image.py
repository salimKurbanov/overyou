# Generated by Django 5.1.7 on 2025-03-28 09:26

import main.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_alter_seo_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='applications',
            name='type',
        ),
        migrations.AlterField(
            model_name='scenaries',
            name='label_image',
            field=models.FileField(blank=True, null=True, upload_to='images/scenaries/', validators=[main.models.validate_not_svg], verbose_name='Лэйбл'),
        ),
    ]

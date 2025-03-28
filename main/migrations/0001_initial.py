# Generated by Django 5.1.7 on 2025-03-22 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Seo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('page', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=100)),
                ('keywords', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'SEO',
                'verbose_name_plural': 'SEO',
            },
        ),
    ]

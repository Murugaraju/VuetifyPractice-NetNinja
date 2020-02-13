from django.db import models

# Create your models here.
class Todo(models.Model):
    URGENCY_CHOICES=[
        ('IM','immediate'),
        ('NR','normal'),
        ('ME','medium')
    ]
    title= models.CharField(max_length=100)
    urgency= models.CharField(max_length=2,choices=URGENCY_CHOICES,default='NR'),
    target_date= models.DateField()

    def __str__(self):
        return self.title

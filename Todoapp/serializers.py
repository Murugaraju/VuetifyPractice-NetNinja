from rest_framework.serializers import ModelSerializer
from .models import Todo


class TodoModelSerializer(ModelSerializer):
    class Meta:
        model=Todo
        fields='__all__'
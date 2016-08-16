from django.conf.urls import url, include
from django.contrib import admin

from books.models import Author, Book
from rest_framework import routers, serializers, viewsets
from rest_framework.authtoken import views



class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ('first_name', 'last_name', 'description')


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ('name', 'description', 'author')


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


router = routers.DefaultRouter()
router.register(r'authors', AuthorViewSet)
router.register(r'books', BookViewSet)


urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api-token-auth/', views.obtain_auth_token),
]


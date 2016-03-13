from __future__ import unicode_literals

from django.db import models

class Author(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.TextField()
    description = models.CharField(max_length=200)

    def __unicode__(self):
        return "{} {}".format(self.first_name, self.last_name)

class Book(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)




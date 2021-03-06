from __future__ import unicode_literals

from django.db import models

class Author(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    description = models.TextField()

    def __unicode__(self):
        return "{} {}".format(self.first_name, self.last_name)

class Book(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)




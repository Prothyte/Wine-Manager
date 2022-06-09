import uuid
from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255,default="")
    slug = models.SlugField(max_length=255, unique=True,default="")

    class Meta:
        verbose_name_plural = "categories"

    def get_absolute_url(self):
        pass

    def __str__(self):
        return self.name


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.ForeignKey(
        Category, related_name="product", on_delete=models.CASCADE, null=True)
    created_by = models.ForeignKey(
        User, related_name="product_creator", on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=255,null=True)
    description = models.TextField(blank=True, null=True)
    country = models.CharField(max_length=255, null=True)
    image = models.ImageField(upload_to="images/", null=True)
    slug = models.SlugField(max_length=255, null=True)
    price = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    in_stock = models.BooleanField(default=True, null=True)
    created = models.DateTimeField(auto_now_add=True, null=True)
    

    class Meta:
        ordering = ("-created",)
    
    def __str__(self):
        return self.title

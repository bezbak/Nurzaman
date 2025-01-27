# from apps.apartment.models import Category, Rooms, Status, Block, Floor, Apartment
from models import models

# Создаем объекты, которые будут связаны
category = models.Category.objects.create(title="Категория 1")
room = models.Rooms.objects.create(title="3 комнаты")
status = models.Status.objects.create(title="Новый", it=1)
block = models.Block.objects.create(number=1, date="2024-12-31", it=1)
floor = models.Floor.objects.create(block=block, title=1)

# Создаем связанную квартиру
apartment = models.Apartment.objects.create(
    category=category,
    floor=floor,
    room=room,
    status=status,
    razmer=90.0,
    info="Просторная квартира",
    price=50000,
    exploitation="2025",
    layout_text="Просторная планировка"
)

print(apartment)

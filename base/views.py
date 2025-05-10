from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def categories(request):
    return render(request, 'categories.html') 

def category_detail(request, category_name):
    context = {'category': category_name}
    return render(request, 'category_detail.html', context)

def read_view(request):
    return render(request, 'read.html')
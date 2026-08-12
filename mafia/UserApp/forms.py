from django import forms

class UserLoginForm(forms.Form):
    name = forms.CharField(max_length=300)
    password = forms.CharField(max_length=300)
    password_again = forms.CharField(max_length=300)
    
# email_service.py

from django.core.mail import EmailMessage
from django.conf import settings
from .models import OTP

class EmailVerification:

    @staticmethod
    def send_verification_code(email):
        verification_code = OTP.generate_otp(email)

        subject = 'Your OTP Code'
        body = f'Your OTP code is: {verification_code}'

        email_message = EmailMessage(
            subject,
            body,
            settings.DEFAULT_FROM_EMAIL,
            [email]
        )

        try:
            email_message.send()
            print('Verification code sent successfully!')
        except Exception as e:
            print(f"Error: {str(e)}")

        return verification_code

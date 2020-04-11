import logging
import os

IS_PRODUCTION = os.environ.get('ENVIRONMENT_NAME', 'local') == 'production'
IS_LOCAL = os.environ.get('ENVIRONMENT_NAME', 'local') == 'local'

MESSAGE_QUEUE_HOST = os.environ.get('MESSAGE_QUEUE_HOST', 'localhost')
JWT_KEY = os.environ.get('JWT_KEY', 'MMSSLS')
LOG_LEVEL = int(os.environ.get('LOG_LEVEL', logging.DEBUG))
ENVIRONMENT_NAME = os.environ.get('ENVIRONMENT_NAME', 'local')

EVENTS_QUEUE = os.environ.get('EVENTS_QUEUE', 'events')

# Lender credentials
LENDER_CREDENTIALS_KEY = os.environ.get('LENDER_CREDENTIALS_KEY', 'osZsB1N04wfOam2o88Z1dfTSdybEEiSLHtUDks-_6QU=')

# Mailgun
MAILGUN_BASE_API_URL = os.environ.get('MAILGUN_BASE_API_URL',
                                      'https://api.mailgun.net/v3/sandboxc7800a250a1746b0a4365e47f0402659.mailgun.org'
                                      '/messages')
MAILGUN_API_KEY = os.environ.get('MAILGUN_API_KEY', 'key-de0fab0da1dd9920e24cbc52a0004c4d')

# MongoDB Atlas
MONGODB_NAME = os.environ.get('MONGODB_NAME', 'local-db')
mongodb_host_with_credentials = os.environ.get('MONGODB_HOST_WITH_CREDENTIALS',
                                               'mongodb://localhost/{DB_NAME}?w=majority')
MONGODB_HOST = mongodb_host_with_credentials.format(DB_NAME=MONGODB_NAME)
MONGODB_HOST_ANALYTICS = MONGODB_HOST + '&readPreference=secondary&readPreferenceTags=nodeType:ANALYTICS'

# Logging screening
HEADERS_SCREEN = ['Authorization']
BODY_SCREEN = ['payment_details', 'paymentMethod', 'CardExpiration', 'expirationDate', 'CardNumber', 'cardNumber',
               'CardCvv', 'cvv', 'password', 'client_secret', 'access_token']

# HTTP
DEFAULT_HTTP_REQUEST_TIMEOUT = 120

# Dashboard
DASHBOARD_IDLE_SESSION_TIMEOUT_MINUTES = 30
DEFAULT_STORE_ID = 'DEF_STORE_0'

# MixPanel
MIXPANEL_PROJECT_TOKEN = os.environ.get('MIXPANEL_PROJECT_TOKEN', 'd0278d2057b8dad8242997a3c704ea02')

# Google reCAPTCHA
GRECAPTCHA_SECRET_KEY = os.environ.get('GRECAPTCHA_SECRET_KEY', '6LcMdcUUAAAAAOB9ea4asGcymtScEqZ5jzfwTOLa')

GOOGLE_RECAPTCHA_VERIFY_URL = os.environ.get('GOOGLE_RECAPTCHA_VERIFY_URL',
                                             'https://www.google.com/recaptcha/api/siteverify')

GOOGLE_RECAPTCHA_MIN_SCORE = os.environ.get('GOOGLE_RECAPTCHA_MIN_SCORE', 0.7)
print(os.environ.get('SANDBOX_REST_ENDPOINTS', 'NORMAL'))
# print(os.environ)
aa = os.environ.get('SANDBOX_REST_ENDPOINTS', 'NORMAL')
IS_SANDBOX_REST_MOCK = os.environ.get('SANDBOX_REST_ENDPOINTS', 'NORMAL') == 'MOCK'
IS_SANDBOX_SOAP_MOCK = os.environ.get('SANDBOX_SOAP_ENDPOINTS', 'NORMAL') == 'MOCK'


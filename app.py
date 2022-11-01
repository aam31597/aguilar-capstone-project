from flask import Flask, send_from_directory, request, make_response

app = Flask(__name__, static_url_path='', static_folder='aguilar-capstone/static')

@app.route('/', defaults={'path': ''})

def serve(path):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
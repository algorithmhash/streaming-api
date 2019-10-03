Created with create-react-app (irrelevant)

# Decrypter for a specific streaming API

This should produce a specific url for you to use in your APIs but it's for specifically a finnish news api. You can guess.

All you need to do is git clone it, cd then yarn or npm, after that run it.

First issue is that some variables will be undefined: 2 arguments.

First argument is a transaction that produces a JSON Object with an encrypted url string. Second argument is the key given to you after you ask kindly for permission to use their api.


# API

This api is the YLE Api for streaming their news source. Just signup here: https://developer.yle.fi/en/index.html Get your stuff and just replace it in the main App.js file. If you want to set up a backend process that creates an endpoint that does some crazy magical auth, then decryption and rendering of video streams then go ahead. This is meant to be simple so it's scalable for others.

# if it fails

If this setup fails, then follow these steps:
1. If it seems as if it is a continuous dependency error, run through the steps of debugging by trashing your package-lock.json or yarn.lock files and node_modules director then reinstall using yarn or npm. If it continues to fail check your node and dependency versions. Go from there.
2. If it seems as if it's a user error please direct yourself to the API documentation and the Learn React link.

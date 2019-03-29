# Itinerarian

The purpose of this web application is to leverage React, Redux, Rails, and Google API to help users organize trips. Users can log in, create itineraries with dates and points of interest and persist them in a meaningful way.

Because this application utilizes Google API, be aware that by using it you also are bound by Google's TOS more info here:
https://developers.google.com/terms/

## Installation

To install the backend requirements, run 'bundle install' prior to usage.
For the frontend requirements, use your package handler (e.g. npm install) to install the frontend dependencies

To set up the db structure, run 'rake db:migrate'

There is a rake command 'rake start' to start the rails backend server and the front end simultaneously. This application uses foreman to start the client @ port 3000 and the backand rails API @ port 3001


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/thekevinhuang/itinerarian-v-002. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

This application is currently available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).



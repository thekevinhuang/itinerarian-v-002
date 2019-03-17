Rails.application.config.middleware.use OmniAuth::Builder do
    provider :google_oauth2, ENV['CONSUMER_KEY'], ENV['CONSUMER_SECRET']
end
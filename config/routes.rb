Rails.application.routes.draw do
  scope '/api' do
    resources :users
    resources :itineraries
    resources :itin_dates
    resources :ipoints

    resources :users do
      resources :itineraries
    end

    resources :itineraries do
      resources :itin_dates
    end
    
    resources :itin_dates do
      resources :ipoints
    end

    post '/signin' => 'users#login'

    get '/google_signin', to: redirect("/auth/google_oauth2")

    get 'auth/google_oauth2/callback' => 'sessions#create'

  end

  

end

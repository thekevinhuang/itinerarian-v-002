Rails.application.routes.draw do
  scope '/api' do
    resources :users
    resources :itineraries
    resources :itin_dates

    resources :users do
      resources :itineraries
    end

    resources :itineraries do
      resources :itin_dates
    end
    

    post '/signin' => 'users#login'
  end

end

Rails.application.routes.draw do
  scope '/api' do
    resources :users
    resources :itineraries
    resources :itin_dates
    resources :ipoints
    resources :packing_items

    resources :users do
      resources :itineraries
    end

    resources :itineraries do
      resources :itin_dates
      resources :packing_items
    end
    
    resources :itin_dates do
      resources :ipoints
    end

    post '/signin' => 'users#login'

    post 'auth/request' => 'users#google_authorization'

  end
  

end

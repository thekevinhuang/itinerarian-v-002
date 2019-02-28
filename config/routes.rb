Rails.application.routes.draw do
  scope '/api' do
    resources :users
    resources :itineraries

    resources :users do
      resources :itineraries
    end
    

    post '/signin' => 'users#login'
  end

end

Rails.application.routes.draw do
  scope '/api' do
    resources :users

    post '/signin' => 'user#login'
  end

end

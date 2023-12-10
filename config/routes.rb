Rails.application.routes.draw do
  get 'static/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'static#index'
  get '/api/random_greeting', to: 'greetings#random'
end

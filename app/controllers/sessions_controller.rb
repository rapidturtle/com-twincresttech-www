class SessionsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    user = User.from_omniauth(request.env["omniauth.auth"])
    cookies[:auth_token] = user.auth_token
    redirect_to root_path, notice: "#{user.name} signed in successfully!"
  end

  def destroy
    cookies.delete :auth_token
    redirect_to root_path
  end
end

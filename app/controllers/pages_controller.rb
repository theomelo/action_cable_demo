class PagesController < ApplicationController
  def home
  end

  def hello
    ActionCable.server.broadcast 'AlertsChannel', 'Hello from Rails!'
  end
end

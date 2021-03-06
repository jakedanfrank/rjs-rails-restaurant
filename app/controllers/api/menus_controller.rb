class Api::MenusController < ApplicationController

  def index
    render json: Menu.all 
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: { errors: menu.errors }, status: :unprocessable_entity
    end
  end

  def update
    menu = Menu.find(params[:id])
    menu.update(price: !menu.complete)
    render json: menu
  end

  def destroy
    Menu.find(params[:id]).destroy
    render json: { message: "Menu has been deleted" }
  end

  private

  def item_params
    params.require(:menu).permit(:name, :price)
  end
end

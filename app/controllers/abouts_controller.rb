class AboutsController < ApplicationController
    def index
        abouts = About.all
        render json: abouts, status: :ok
    end

    def show
        about = About.find_by(id: params[:id])
        if about
            render json: about, status: :ok
        else
            render json: { error: "About not found" }, status: :not_found
        end
    end
end

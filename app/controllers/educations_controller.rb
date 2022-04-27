class EducationsController < ApplicationController
    def index
        educations = Education.all
        render json: educations, status: :ok
    end

    def show
        education = Education.find_by(id: params[:id])
        if education
            render json: education, status: :ok
        else
            render json: { error: "Education not found" }, status: :not_found
        end
    end
end

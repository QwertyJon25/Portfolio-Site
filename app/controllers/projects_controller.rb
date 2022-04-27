class ProjectsController < ApplicationController
    def index
        projects = Project.all
        render json: projects, status: :ok
    end

    def show
        project = Project.find_by(id: params[:id])
        if project
            render json: project, status: :ok
        else
            render json: { error: "Project not found" }, status: :not_found
        end
    end
end

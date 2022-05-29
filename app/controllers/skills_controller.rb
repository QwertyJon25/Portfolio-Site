class SkillsController < ApplicationController
    def index
        skills = Skill.all
        render json: skills, status: :ok
    end

    def show
        skill = Skill.find_by(id: params[:id])
        if skill
            render json: skill, status: :ok
        else
            render json: { error: "Skill not found" }, status: :not_found
        end
    end
end

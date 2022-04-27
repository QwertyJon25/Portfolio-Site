class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :git, :vid
end

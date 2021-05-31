package itsol_project.itsolwebserver.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "role")
@Getter
@Setter
public class Role extends BaseEntity{
    @Column(nullable = false)
    private String name;
    private String description;
    private Integer status;

    public Role() {
    }
}

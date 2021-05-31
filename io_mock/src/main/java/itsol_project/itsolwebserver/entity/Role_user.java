package itsol_project.itsolwebserver.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "role_user")
@Getter
@Setter
public class Role_user extends BaseEntity{
    @Column(nullable = false)
    private Long user_id;
    private Long role_id;
    public Role_user() {
    }
}

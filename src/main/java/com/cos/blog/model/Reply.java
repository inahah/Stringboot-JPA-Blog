package com.cos.blog.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Reply {
	@Id // Primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 프로젝트에서 연결된 DB의 넘버링 전략을 따라간다.
	private int id; // 오라클-시퀀스, MySQL-auto_increment / 자동입력 
	
	@Column(nullable = false, length = 200)
	private String content;
	
	@ManyToOne // 여러 개의 답변은 하나의 게시글에 존재 할 수 있다.
	@JoinColumn(name="boardId")
	private Board board;
	
	@ManyToOne // 여러 개의 답변을 하나의 유저가 쓸 수 있다.
	@JoinColumn(name="userId")
	private User user; 
	
	@CreationTimestamp
	private Timestamp createDate;
}

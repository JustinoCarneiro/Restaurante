package com.restaurante.backend.controller;

import com.restaurante.backend.model.Produto;
import com.restaurante.backend.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @PostMapping
    public ResponseEntity<Produto> criarProduto(@RequestBody Produto produto) {

        Produto produtoSalvo = produtoRepository.save(produto);

        return new ResponseEntity<>(produtoSalvo, HttpStatus.CREATED);
    }
}
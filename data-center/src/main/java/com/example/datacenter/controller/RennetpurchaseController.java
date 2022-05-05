package com.example.datacenter.controller;
import java.util.Date;
import java.util.List;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.example.datacenter.model.domain.Rennetpurchase;
import com.example.datacenter.model.domain.request.RennetpurchaseRequest;
import com.example.datacenter.service.RennetpurchaseService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * @author Hongsen
 * @create 2022-04-29 16:17
 */
@RestController
@RequestMapping("/rennetpurchase")
public class RennetpurchaseController {
    @Resource
    private RennetpurchaseService rennetpurchaseService;

    /**
     * add, update, search, delete
     */
    @PostMapping("/add")
    public String addRennetpurchase(@RequestBody RennetpurchaseRequest request) {
        Rennetpurchase rennetpurchase = new Rennetpurchase();
        rennetpurchase.setRennetOrderID(request.getRennetOrderID());
        rennetpurchase.setSupplierName(request.getSupplierName());
        rennetpurchase.setRennetName(request.getRennetName());
        rennetpurchase.setRennetBatchCode(request.getRennetBatchCode());
        rennetpurchase.setRennet_Best_Before(request.getRennet_Best_Before());
        rennetpurchase.setRennet_Open_Date(request.getRennet_Open_Date());
        rennetpurchase.setQuantity(request.getQuantity());
        rennetpurchase.setCreateTime(new Date());
        rennetpurchase.setUpdateTime(new Date());
        rennetpurchase.setIsDelete(0);
        rennetpurchase.setIsUsed(0);

        boolean save = rennetpurchaseService.save(rennetpurchase);
        if (!save) {
            return "null,";
        }
        return rennetpurchase.getRennetOrderID();
    }

    @PostMapping("/update")
    public String updateRennetpurchase(@RequestBody RennetpurchaseRequest request) {
        String rennetOrderID = request.getRennetOrderID();
        if (rennetOrderID == null) {
            return null;
        }
        Rennetpurchase rennetpurchase = rennetpurchaseService.getById(rennetOrderID);

        rennetpurchase.setSupplierName(request.getSupplierName());
        rennetpurchase.setRennetName(request.getRennetName());
        rennetpurchase.setRennetBatchCode(request.getRennetBatchCode());
        rennetpurchase.setRennet_Best_Before(request.getRennet_Best_Before());
        rennetpurchase.setRennet_Open_Date(request.getRennet_Open_Date());
        rennetpurchase.setQuantity(request.getQuantity());
        rennetpurchase.setUpdateTime(new Date());

        rennetpurchaseService.saveOrUpdate(rennetpurchase);

        return rennetpurchase.getRennetOrderID();
    }

    @GetMapping("/search")
    public List<Rennetpurchase> searchRennetpurchase(String id, HttpServletRequest request) {
        QueryWrapper<Rennetpurchase> queryWrapper = new QueryWrapper<>();
        if (StringUtils.isNotBlank(id)) {
            queryWrapper.like("RennetOrderID", id);
        }
        return rennetpurchaseService.list(queryWrapper);
    }

    @PostMapping("/delete")
    public void deleteRennetpurchase(@RequestBody RennetpurchaseRequest request) {
        Rennetpurchase rennetpurchase = new Rennetpurchase();
        rennetpurchase.setRennetOrderID(request.getRennetOrderID());
        rennetpurchaseService.removeById(rennetpurchase);
    }
}
